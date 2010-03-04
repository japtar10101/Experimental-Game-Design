Shader "Toon/Lighted" {
	Properties {
		_Color ("Main Color", Color) = (0.5,0.5,0.5,1)
		_MainTex ("Base (RGB)", 2D) = "white" {}
		_ToonShade ("Toon Cubemap (RGB)", CUBE) = "" { Texgen CubeReflect }
	}

	SubShader {
		Tags { "RenderType"="Opaque" }
		Blend AppSrcAdd AppDstAdd
		Fog { Color [_AddFog] }
		
		// Ambient pass
        Pass {
			Name "BASE"
            Tags {"LightMode" = "PixelOrNone"}
            Color [_PPLAmbient]
            SetTexture [_MainTex] {constantColor [_Color] Combine primary DOUBLE, constant}
        }
        // Vertex lights
        Pass {
			Name "BASE"
            Tags {"LightMode" = "Vertex"}
            Color [_PPLAmbient]
            SetTexture [_MainTex] {constantColor [_Color] Combine primary DOUBLE, constant}
        }
        // Pixel lights (directional only)
        Pass {
			Name "PPL"
			Tags { "LightMode" = "Pixel" }
CGPROGRAM
#pragma vertex vert
#include "UnityCG.cginc"

struct appdata {
    float4 vertex;
    float3 normal;
    float4 texcoord;
};

struct v2f {
	V2F_POS_FOG;
	float4 color : COLOR;
	float3 uv0;
	float4 uv1;
};
v2f vert(appdata_base v)
{
	v2f o;
	PositionFog( v.vertex, o.pos, o.fog );
	o.uv1 = mul (glstate.matrix.texture[0], v.texcoord);
	o.uv0 = mul ((float3x3)_Object2Light0, -v.normal);
	return o;
}
ENDCG
			Color (0,0,0,0)
			Cull Back
			SetTexture [_ToonShade] {
				constantColor [_ModelLightColor0]
				combine texture * constant
			}
			SetTexture [_MainTex] {
				combine texture * previous DOUBLE
			}
		}
	} 

	Fallback " VertexLit"
}
