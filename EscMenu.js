var skin : GUISkin;
var ShowGui : boolean;
var CanShow : boolean = true;
private var sensitivityY : float;
private var sensitivityX : float;
function Start(){
PlayerPrefs.SetFloat("sensitivityY", 15f);
PlayerPrefs.SetFloat("sensitivityX", 15f);
}
function Update(){
if(ShowGui == true){
Screen.showCursor = true;
PlayerPrefs.SetFloat("sensitivityY", 0f);
PlayerPrefs.SetFloat("sensitivityX", 0f);
}
if(ShowGui == false){
Screen.showCursor = false;
PlayerPrefs.SetFloat("sensitivityY", 15f);
PlayerPrefs.SetFloat("sensitivityX", 15f);
}
if(Input.GetKeyUp(KeyCode.Escape)){
	if(CanShow == true){
		ShowGui = true;
		}
	}
if(ShowGui == true){
	Time.timeScale = 0;
	}
}
function OnGUI () {
if(ShowGui == true){
	if(CanShow == true){
		GUI.skin = skin;
		GUILayout.BeginArea(new Rect (Screen.width / 2 - 47.5, Screen.height / 2 - 47.5, 95, 95));
		GUILayout.BeginVertical("box");
		GUILayout.Label ("Exit?");
		if(GUILayout.Button ("Yes")){
			Application.LoadLevel(0);
			}
		if(GUILayout.Button("No")){
			CanShow = true;
			ShowGui = false;
			}
		GUILayout.EndVertical();
		GUILayout.EndArea();
		}
    }
}