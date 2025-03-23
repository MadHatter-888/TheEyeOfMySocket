const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Plugins.Keyboard,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{ScrollTo: 0},
	{Platform: 0},
	{BoundToLayout: 0},
	{Eye: 0},
	{Keyboard: 0},
	{Solid: 0},
	{Death: 0},
	{NextLevel: 0},
	{Level1: 0},
	{Level2: 0},
	{Level3: 0},
	{Level4: 0},
	{GameOver: 0},
	{Endtext: 0},
	{Starttext: 0},
	{Biohazard: 0},
	{levelNumber: 0}
];

self.InstanceType = {
	Eye: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	Platform: class extends self.ITiledBackgroundInstance {},
	Death: class extends self.ISpriteInstance {},
	NextLevel: class extends self.ISpriteInstance {},
	Level1: class extends self.ITiledBackgroundInstance {},
	Level2: class extends self.ITiledBackgroundInstance {},
	Level3: class extends self.ITiledBackgroundInstance {},
	Level4: class extends self.ITiledBackgroundInstance {},
	GameOver: class extends self.ISpriteInstance {},
	Endtext: class extends self.ITextInstance {},
	Starttext: class extends self.ITextInstance {},
	Biohazard: class extends self.ISpriteInstance {}
}