var Bench : boolean;
function Start () {
shadows = PlayerPrefs.GetString("shadows");
	if(shadows == "None"){
	light.shadows = LightShadows.None;
	}
	if(shadows == "Hard"){
	light.shadows = LightShadows.Hard;
	}
	if(shadows == "Soft"){
	light.shadows = LightShadows.Soft;
	}
AA_lvl = PlayerPrefs.GetString("aa_lvl");
	if(AA_lvl == "0"){
	QualitySettings.antiAliasing = 0;
	}
	if(AA_lvl == "2"){
	QualitySettings.antiAliasing = 2;
	}
	if(AA_lvl == "4"){
	QualitySettings.antiAliasing = 4;
	}
	if(AA_lvl == "8"){
	QualitySettings.antiAliasing = 8;
	}
}
function Update(){
if(Bench == true){
	shadows = PlayerPrefs.GetString("shadows");
		if(shadows == "None"){
		light.shadows = LightShadows.None;
		}
		if(shadows == "Hard"){
		light.shadows = LightShadows.Hard;
		}
		if(shadows == "Soft"){
		light.shadows = LightShadows.Soft;
		}
	AA_lvl = PlayerPrefs.GetString("aa_lvl");
		if(AA_lvl == "0"){
		QualitySettings.antiAliasing = 0;
		}
		if(AA_lvl == "2"){
		QualitySettings.antiAliasing = 2;
		}
		if(AA_lvl == "4"){
		QualitySettings.antiAliasing = 4;
		}
		if(AA_lvl == "8"){
		QualitySettings.antiAliasing = 8;
		}
	}
}