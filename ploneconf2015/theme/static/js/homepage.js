$(document).ready(function() {
  // init controller
  controller = new ScrollMagic();

  var tween_cityscape = new TimelineMax()
      .add([TweenMax.fromTo("#background", 0.5,
              { top: -48 },
              { top: 0 }),
            TweenMax.fromTo("#furthest", 0.5,
              { top: -36 },
              { top: 0 }),
            TweenMax.fromTo("#further", 0.5,
              { top: -24 },
              { top: 0 }),
            TweenMax.fromTo("#far", 0.5,
              { top: -12 },
              { top: 0 })
           ], "+=0", "start");

  // build scene
  var scene_cityscape = new ScrollScene({
            triggerElement: "#scene-cityscape", 
            triggerHook: 0,
            duration: 96
          })
          .setTween(tween_cityscape)
          .addTo(controller);

  var scene_location = new ScrollScene({
            triggerElement: "#location-photos",
            offset: 100
          })
          .setClassToggle('#location-photos', 'active')
          .addTo(controller)

  // show indicators (requires debug extension)
  // scene_cityscape.addIndicators();
  // scene_location.addIndicators();

  // make indicators visible
  // $('.ScrollSceneIndicators').css('z-index', 5000);
});