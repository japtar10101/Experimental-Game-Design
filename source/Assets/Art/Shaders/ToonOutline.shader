Shader "Toon/Basic Outline" {
	Properties {
		_Color ("Main Color", Color) = (.5,.5,.5,1)
		_OutlineColor ("Outline Color", Color) = (0,0,0,1)
		_Outline ("Outline width", Range (.002, 0.03)) = .005
		_MainTex ("Base (RGB)", 2D) = "white" { }
		_ToonShade ("ToonShader Cubemap(RGB)", CUBE) = "" { Texgen CubeNormal }
	}

	SubShader {
		Tags { "RenderType"="Opaque" }
		UsePass "Toon/Basic/BASE"
		Pass {
			Name "OUTLINE"
			Tags { "LightMode" = "Always" }
CGPROGRAM
#pragma vertex vert

struct appdata {
    float4 vertex;
    float3 normal;
};

struct v2f {
	float4 pos : POSITION;
	float4 color : COLOR;
	float fog : FOGC;
};
uniform float _Outline;
uniform float4 _OutlineColor;

v2f vert(appdata v) {
	v2f o;
	o.pos = mul(glstate.matrix.mvp, v.vertex);
	float3 norm = mul ((float3x3)glstate.matrix.modelview[0], v.normal);
	norm.x *= glstate.matrix.projection[0][0];
	norm.y *= glstate.matrix.projection[1][1];
	o.pos.xy += norm.xy * o.pos.z * _Outline;
	
	o.fog = o.pos.z;
	o.color = _OutlineColor;
	return o;
}
ENDCG
			//Color (0,0,0,0)
			Cull Front
			ZWrite On
			ColorMask RGB
			Blend SrcAlpha OneMinusSrcAlpha
			SetTexture [_MainTex] { combine primary }
		}
	}
	
	Fallback "Toon/Basic"
}
