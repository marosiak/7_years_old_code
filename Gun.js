#pragma strict
var NormalBullet : Rigidbody;
var SpecialBullet : Rigidbody;
private var Leftpower : float = 1950;
private var Rightpower : float = 2500;
var LeftBulletCount : int;
var RightBulletCount : int;

function Update () {
if (Input.GetButtonDown("Fire1")&& LeftBulletCount > 0 && Time.timeScale > 0.5f){
	var NormInstance: Rigidbody = Instantiate(NormalBullet, transform.position, transform.rotation) as Rigidbody;
	var LeftFwd: Vector3 = transform.TransformDirection(Vector3.forward);
	NormInstance.AddForce(LeftFwd * Leftpower);
	LeftBulletCount --;
	}
}