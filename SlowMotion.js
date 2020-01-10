function Start () {

}

function Update () {
if(Input.GetKey(KeyCode.E)){
	Time.timeScale = 0.5f;
	print(Time.timeScale);
	}
if(Input.GetKeyUp(KeyCode.E)){
	Time.timeScale = 1;
	}
}