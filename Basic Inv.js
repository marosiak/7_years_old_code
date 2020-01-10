var Cube0Texture : Texture;
var Cube1Texture : Texture;
var Cube2Texture : Texture;
var CubeVisual : GameObject;
public var CurrSel : int = 0;

function Update () {
if(Input.GetAxis("Mouse ScrollWheel") < 0){
CurrSel -=1;
}
if(Input.GetAxis("Mouse ScrollWheel") > 0){
CurrSel +=1;
}
if(CurrSel <= -1){
	CurrSel = 2;
}
if(CurrSel > 2){
	CurrSel = 0;
}
VisualEffect();
PlayerPrefs.SetInt("CurrSel", CurrSel);
}
function VisualEffect(){
if(CurrSel == 0){
	CubeVisual.renderer.material.SetTexture("_MainTex", Cube0Texture);
	}
if(CurrSel == 1){
	CubeVisual.renderer.material.SetTexture("_MainTex", Cube1Texture);
	}
if(CurrSel == 2){
	CubeVisual.renderer.material.SetTexture("_MainTex", Cube2Texture);
	}
}