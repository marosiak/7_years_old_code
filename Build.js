var VisualEffect : GameObject;
var Crosshair : GameObject;
var BasicCube : GameObject;
var Player : GameObject;
var VisPosX : int;
var VisPosY : int;
var VisPosZ : int;
var CrosshairPosX : int;
var CrosshairPosY : int;
var CrosshairPosZ : int;
public var CurrSel : int;
var Cube0 : GameObject;
var Cube1 : GameObject;
var Cube2 : GameObject;
var BuildMode : boolean = true;
var CloneCube0List : GameObject[];
var CloneCube1List : GameObject[];
var CloneCube2List : GameObject[];
var BulletList : GameObject[];

function Update () {
if(Input.GetKeyUp(KeyCode.O)){
	BuildMode = true;
	}
if(Input.GetKeyUp(KeyCode.P)){
	BuildMode = false;
	}
CurrSel = PlayerPrefs.GetInt("CurrSel");
if(CurrSel == 0){
	if(Input.GetKeyUp(KeyCode.F)){
		Cube0_Clone = Instantiate(Cube0);
		Cube0_Clone.tag = "Cube0";
		Cube0_Clone.transform.position.x = VisPosX;
		Cube0_Clone.transform.position.y = VisPosY;
		Cube0_Clone.transform.position.z = VisPosZ;
		}
	}
if(CurrSel == 1){
	if(Input.GetKeyUp(KeyCode.F)){
		Cube1_Clone = Instantiate(Cube1);
		Cube1_Clone.tag = "Cube1";
		Cube1_Clone.transform.position.x = VisPosX;
		Cube1_Clone.transform.position.y = VisPosY;
		Cube1_Clone.transform.position.z = VisPosZ;
		}
	}
if(CurrSel == 2){
	if(Input.GetKeyUp(KeyCode.F)){
		Cube2_Clone = Instantiate(Cube2);
		Cube2_Clone.tag = "Cube2";
		Cube2_Clone.transform.position.x = VisPosX;
		Cube2_Clone.transform.position.y = VisPosY;
		Cube2_Clone.transform.position.z = VisPosZ;
		}
	}
if(BuildMode == true){
	VisualEffect.transform.position.x = VisPosX;
	VisualEffect.transform.position.y = VisPosY;
	VisualEffect.transform.position.z = VisPosZ;
	VisPosZ = Crosshair.transform.position.z;
	VisPosX = Crosshair.transform.position.x;
	VisPosY = Crosshair.transform.position.y;
}
if(BuildMode == false){
VisualEffect.transform.position.y = -100;
}

if(Input.GetKeyUp(KeyCode.C)){
BulletList = GameObject.FindGameObjectsWithTag("Bullet");
for (var BulletListBake : GameObject in BulletList) {
	Destroy(BulletListBake);
	}
}

if(Input.GetKeyUp(KeyCode.C)){
	if(CurrSel == "Cube0"){
		CloneCube0List = GameObject.FindGameObjectsWithTag("Cube0");
		for (var CloneCube0ListBake : GameObject in CloneCube0List) {
			Destroy(CloneCube0ListBake);
			}
		}
	}
if(Input.GetKeyUp(KeyCode.C)){
	if(CurrSel == "Cube1"){
		CloneCube1List = GameObject.FindGameObjectsWithTag("Cube1");
		for (var CloneCube1ListBake : GameObject in CloneCube1List) {
			Destroy(CloneCube1ListBake);
			}
		}
	}
if(Input.GetKeyUp(KeyCode.C)){
	if(CurrSel == "Cube2"){
		CloneCube2List = GameObject.FindGameObjectsWithTag("Cube2");
		for (var CloneCube2ListBake : GameObject in CloneCube2List) {
			Destroy(CloneCube2ListBake);
			}
		}
	}
}