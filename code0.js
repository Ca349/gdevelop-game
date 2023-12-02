gdjs.LevelTestCode = {};
gdjs.LevelTestCode.GDPlayerObjects1= [];
gdjs.LevelTestCode.GDPlayerObjects2= [];
gdjs.LevelTestCode.GDPlayerObjects3= [];
gdjs.LevelTestCode.GDGrassObjects1= [];
gdjs.LevelTestCode.GDGrassObjects2= [];
gdjs.LevelTestCode.GDGrassObjects3= [];
gdjs.LevelTestCode.GDDirtObjects1= [];
gdjs.LevelTestCode.GDDirtObjects2= [];
gdjs.LevelTestCode.GDDirtObjects3= [];
gdjs.LevelTestCode.GDCloudsObjects1= [];
gdjs.LevelTestCode.GDCloudsObjects2= [];
gdjs.LevelTestCode.GDCloudsObjects3= [];
gdjs.LevelTestCode.GDFall_9595Of_9595EdgeObjects1= [];
gdjs.LevelTestCode.GDFall_9595Of_9595EdgeObjects2= [];
gdjs.LevelTestCode.GDFall_9595Of_9595EdgeObjects3= [];
gdjs.LevelTestCode.GD_9595_9595BlockObjects1= [];
gdjs.LevelTestCode.GD_9595_9595BlockObjects2= [];
gdjs.LevelTestCode.GD_9595_9595BlockObjects3= [];
gdjs.LevelTestCode.GD_9595_9595Block_9595CollisionObjects1= [];
gdjs.LevelTestCode.GD_9595_9595Block_9595CollisionObjects2= [];
gdjs.LevelTestCode.GD_9595_9595Block_9595CollisionObjects3= [];
gdjs.LevelTestCode.GDScore_9595CounterObjects1= [];
gdjs.LevelTestCode.GDScore_9595CounterObjects2= [];
gdjs.LevelTestCode.GDScore_9595CounterObjects3= [];
gdjs.LevelTestCode.GDCoinObjects1= [];
gdjs.LevelTestCode.GDCoinObjects2= [];
gdjs.LevelTestCode.GDCoinObjects3= [];
gdjs.LevelTestCode.GDEnemyObjects1= [];
gdjs.LevelTestCode.GDEnemyObjects2= [];
gdjs.LevelTestCode.GDEnemyObjects3= [];
gdjs.LevelTestCode.GDNewSpriteObjects1= [];
gdjs.LevelTestCode.GDNewSpriteObjects2= [];
gdjs.LevelTestCode.GDNewSpriteObjects3= [];
gdjs.LevelTestCode.GDNewSprite2Objects1= [];
gdjs.LevelTestCode.GDNewSprite2Objects2= [];
gdjs.LevelTestCode.GDNewSprite2Objects3= [];


gdjs.LevelTestCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelTestCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.LevelTestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LevelTestCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Walk");
}
}{for(var i = 0, len = gdjs.LevelTestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LevelTestCode.GDPlayerObjects2[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelTestCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.LevelTestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LevelTestCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Walk");
}
}{for(var i = 0, len = gdjs.LevelTestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LevelTestCode.GDPlayerObjects2[i].getBehavior("Flippable").flipX(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelTestCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.LevelTestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LevelTestCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Walk");
}
}{for(var i = 0, len = gdjs.LevelTestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LevelTestCode.GDPlayerObjects2[i].getBehavior("Flippable").flipX(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelTestCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.LevelTestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LevelTestCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Walk");
}
}{for(var i = 0, len = gdjs.LevelTestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LevelTestCode.GDPlayerObjects2[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelTestCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelTestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.LevelTestCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.LevelTestCode.GDPlayerObjects1[k] = gdjs.LevelTestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.LevelTestCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LevelTestCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.LevelTestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelTestCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.LevelTestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelTestCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


};gdjs.LevelTestCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelTestCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LevelTestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelTestCode.GDPlayerObjects1[i].getBehavior("SmoothCamera").SetOffsetYOp(-(160), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.LevelTestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelTestCode.GDPlayerObjects1[i].getBehavior("SmoothCamera").SetOffsetXOp(320, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.LevelTestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelTestCode.GDPlayerObjects1[i].getBehavior("SmoothCamera").SetCameraDelay(0.9, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LevelTestCode.GDPlayerObjects1});
gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GDFall_95959595Of_95959595EdgeObjects1Objects = Hashtable.newFrom({"Fall_Of_Edge": gdjs.LevelTestCode.GDFall_9595Of_9595EdgeObjects1});
gdjs.LevelTestCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Fall_Of_Edge"), gdjs.LevelTestCode.GDFall_9595Of_9595EdgeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelTestCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GDPlayerObjects1Objects, gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GDFall_95959595Of_95959595EdgeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LevelTest", false);
}}

}


};gdjs.LevelTestCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("MusicVol").setNumber(124);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "beats.wav", false, 90, 1);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "overworld theme.wav", true, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("MusicVol").getAsNumber(), 1);
}}

}


};gdjs.LevelTestCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelTestCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.LevelTestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LevelTestCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelTestCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.LevelTestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LevelTestCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelTestCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.LevelTestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LevelTestCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelTestCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LevelTestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelTestCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GD_95959595_95959595Block_95959595CollisionObjects2Objects = Hashtable.newFrom({"__Block_Collision": gdjs.LevelTestCode.GD_9595_9595Block_9595CollisionObjects2});
gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.LevelTestCode.GDPlayerObjects2});
gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GD_95959595_95959595Block_95959595CollisionObjects2Objects = Hashtable.newFrom({"__Block_Collision": gdjs.LevelTestCode.GD_9595_9595Block_9595CollisionObjects2});
gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GD_95959595_95959595BlockObjects2Objects = Hashtable.newFrom({"__Block": gdjs.LevelTestCode.GD_9595_9595BlockObjects2});
gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.LevelTestCode.GDCoinObjects1});
gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LevelTestCode.GDPlayerObjects1});
gdjs.LevelTestCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelTestCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("__Block"), gdjs.LevelTestCode.GD_9595_9595BlockObjects2);
gdjs.copyArray(runtimeScene.getObjects("__Block_Collision"), gdjs.LevelTestCode.GD_9595_9595Block_9595CollisionObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GD_95959595_95959595Block_95959595CollisionObjects2Objects, gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GDPlayerObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GD_95959595_95959595Block_95959595CollisionObjects2Objects, gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GD_95959595_95959595BlockObjects2Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.LevelTestCode.GD_9595_9595BlockObjects2 */
/* Reuse gdjs.LevelTestCode.GD_9595_9595Block_9595CollisionObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.LevelTestCode.GD_9595_9595Block_9595CollisionObjects2.length ;i < len;++i) {
    gdjs.LevelTestCode.GD_9595_9595Block_9595CollisionObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.LevelTestCode.GD_9595_9595BlockObjects2.length ;i < len;++i) {
    gdjs.LevelTestCode.GD_9595_9595BlockObjects2[i].getBehavior("Animation").setAnimationName("collected");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Score_Counter"), gdjs.LevelTestCode.GDScore_9595CounterObjects2);
{for(var i = 0, len = gdjs.LevelTestCode.GDScore_9595CounterObjects2.length ;i < len;++i) {
    gdjs.LevelTestCode.GDScore_9595CounterObjects2[i].getBehavior("Text").setText("Score : " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.LevelTestCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelTestCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GDCoinObjects1Objects, gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LevelTestCode.GDCoinObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.LevelTestCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.LevelTestCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.LevelTestCode.GDPlayerObjects2});
gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.LevelTestCode.GDEnemyObjects2});
gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LevelTestCode.GDPlayerObjects1});
gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.LevelTestCode.GDEnemyObjects1});
gdjs.LevelTestCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.LevelTestCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelTestCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GDPlayerObjects2Objects, gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GDEnemyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelTestCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.LevelTestCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.LevelTestCode.GDPlayerObjects2[k] = gdjs.LevelTestCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.LevelTestCode.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.LevelTestCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelTestCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GDPlayerObjects1Objects, gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GDEnemyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelTestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.LevelTestCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.LevelTestCode.GDPlayerObjects1[k] = gdjs.LevelTestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.LevelTestCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.LevelTestCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.LevelTestCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.LevelTestCode.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.LevelTestCode.GDNewSpriteObjects1});
gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LevelTestCode.GDPlayerObjects1});
gdjs.LevelTestCode.eventsList7 = function(runtimeScene) {

{


gdjs.LevelTestCode.eventsList0(runtimeScene);
}


{


gdjs.LevelTestCode.eventsList1(runtimeScene);
}


{


gdjs.LevelTestCode.eventsList2(runtimeScene);
}


{


gdjs.LevelTestCode.eventsList3(runtimeScene);
}


{


gdjs.LevelTestCode.eventsList4(runtimeScene);
}


{


gdjs.LevelTestCode.eventsList5(runtimeScene);
}


{


gdjs.LevelTestCode.eventsList6(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LevelTestCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelTestCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GDNewSpriteObjects1Objects, gdjs.LevelTestCode.mapOfGDgdjs_9546LevelTestCode_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DMOComplete", false);
}}

}


};

gdjs.LevelTestCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelTestCode.GDPlayerObjects1.length = 0;
gdjs.LevelTestCode.GDPlayerObjects2.length = 0;
gdjs.LevelTestCode.GDPlayerObjects3.length = 0;
gdjs.LevelTestCode.GDGrassObjects1.length = 0;
gdjs.LevelTestCode.GDGrassObjects2.length = 0;
gdjs.LevelTestCode.GDGrassObjects3.length = 0;
gdjs.LevelTestCode.GDDirtObjects1.length = 0;
gdjs.LevelTestCode.GDDirtObjects2.length = 0;
gdjs.LevelTestCode.GDDirtObjects3.length = 0;
gdjs.LevelTestCode.GDCloudsObjects1.length = 0;
gdjs.LevelTestCode.GDCloudsObjects2.length = 0;
gdjs.LevelTestCode.GDCloudsObjects3.length = 0;
gdjs.LevelTestCode.GDFall_9595Of_9595EdgeObjects1.length = 0;
gdjs.LevelTestCode.GDFall_9595Of_9595EdgeObjects2.length = 0;
gdjs.LevelTestCode.GDFall_9595Of_9595EdgeObjects3.length = 0;
gdjs.LevelTestCode.GD_9595_9595BlockObjects1.length = 0;
gdjs.LevelTestCode.GD_9595_9595BlockObjects2.length = 0;
gdjs.LevelTestCode.GD_9595_9595BlockObjects3.length = 0;
gdjs.LevelTestCode.GD_9595_9595Block_9595CollisionObjects1.length = 0;
gdjs.LevelTestCode.GD_9595_9595Block_9595CollisionObjects2.length = 0;
gdjs.LevelTestCode.GD_9595_9595Block_9595CollisionObjects3.length = 0;
gdjs.LevelTestCode.GDScore_9595CounterObjects1.length = 0;
gdjs.LevelTestCode.GDScore_9595CounterObjects2.length = 0;
gdjs.LevelTestCode.GDScore_9595CounterObjects3.length = 0;
gdjs.LevelTestCode.GDCoinObjects1.length = 0;
gdjs.LevelTestCode.GDCoinObjects2.length = 0;
gdjs.LevelTestCode.GDCoinObjects3.length = 0;
gdjs.LevelTestCode.GDEnemyObjects1.length = 0;
gdjs.LevelTestCode.GDEnemyObjects2.length = 0;
gdjs.LevelTestCode.GDEnemyObjects3.length = 0;
gdjs.LevelTestCode.GDNewSpriteObjects1.length = 0;
gdjs.LevelTestCode.GDNewSpriteObjects2.length = 0;
gdjs.LevelTestCode.GDNewSpriteObjects3.length = 0;
gdjs.LevelTestCode.GDNewSprite2Objects1.length = 0;
gdjs.LevelTestCode.GDNewSprite2Objects2.length = 0;
gdjs.LevelTestCode.GDNewSprite2Objects3.length = 0;

gdjs.LevelTestCode.eventsList7(runtimeScene);

return;

}

gdjs['LevelTestCode'] = gdjs.LevelTestCode;
