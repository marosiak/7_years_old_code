private var timewait : float;
var IsContinue : boolean;
var IsNewGame : boolean;
var IsOther : boolean;
var Other_level : String;
var IsQuit : boolean;
timewait = 0.02;
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
function OnMouseUp(){
	if(IsContinue == true){
		//tu wpisz co ma sie zrobić jezeli to jst przycisk kontynuuj
		//No nie pierdol 0.o - MiXer
		}
	if(IsNewGame == true){
		//tu wpisz co ma sie robić jezeli to "new game"
		Application.LoadLevel(1);
		}
	if(IsOther == true){
        Application.LoadLevel(Other_level);
		}
	if(IsQuit == true){
		Application.Quit();
		}
}
function OnMouseEnter () {
	FadeStart();
	}
function OnMouseExit () {
	FadeEnd();
	}