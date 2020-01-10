var Antialiasing_0 : boolean;
var Antialiasing_2 : boolean;
var Antialiasing_4 : boolean;
var Antialiasing_8 : boolean;
var a : String = "===========================";
var Shadow_None : boolean;
var Shadow_Hard : boolean;
var Shadow_Soft : boolean;
 
function FadeStart(){
this.renderer.material.color.a = 1f;
this.renderer.material.color.a = 0.9f;
this.renderer.material.color.a = 0.8f;
this.renderer.material.color.a = 0.7f;
this.renderer.material.color.a = 0.6f;
this.renderer.material.color.a = 0.5f;
this.renderer.material.color.a = 0.4f;

}
function FadeEnd(){
this.renderer.material.color.a = 0.4f;
this.renderer.material.color.a = 0.5f;
this.renderer.material.color.a = 0.6f;
this.renderer.material.color.a = 0.7f;
this.renderer.material.color.a = 0.8f;
this.renderer.material.color.a = 0.9f;
this.renderer.material.color.a = 1f;
}
function OnMouseEnter () {
	FadeStart();
	}

function OnMouseExit () {
	FadeEnd();
	}
function OnMouseUp(){
	if(Antialiasing_0 == true){
		PlayerPrefs.SetString("aa_lvl", "0");
	}
	if(Antialiasing_2 == true){
		PlayerPrefs.SetString("aa_lvl", "2");
	}
	if(Antialiasing_4 == true){
		PlayerPrefs.SetString("aa_lvl", "4");
	}
	if(Antialiasing_8 == true){
		PlayerPrefs.SetString("aa_lvl", "8");
	}
	if(Shadow_None == true){
		PlayerPrefs.SetString("shadows", "None");
	}
	if(Shadow_Hard == true){
		PlayerPrefs.SetString("shadows", "Hard");
	}
	if(Shadow_Soft == true){
		PlayerPrefs.SetString("shadows", "Soft");
	}
}