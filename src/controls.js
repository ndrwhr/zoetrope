
var DOM = {
    style: function(element, property, value){
        element.style[Modernizr.prefixed(property)] = value;
    }
};

var Zoetrope = function(){
    var wrapper = document.querySelector('.wrapper'),
        container = document.querySelector('.zoetrope'),
        frames = document.querySelector('.frames');

    // Properties with getters and setters:
    var scale = 1,
        period = 1.200,
        angle = -11,
        animation = 'willie',
        background = 238;

    Object.defineProperty(this, 'scale', {
        get: function(){ return scale },
        set: function(value){
            scale = value;
            DOM.style(wrapper, 'transform', 'scale(' + scale + ')');
        }
    });

    Object.defineProperty(this, 'period', {
        get: function(){ return period },
        set: function(value){
            period = value;
            DOM.style(frames, 'animationDuration', (period * 1000) + 'ms');
        }
    });

    Object.defineProperty(this, 'angle', {
        get: function(){ return angle },
        set: function(value){
            angle = value;
            DOM.style(container, 'transform', 'rotateX(' + angle + 'deg)');
        }
    });

    Object.defineProperty(this, 'animation', {
        get: function(){ return animation },
        set: function(value){
            animation = value;
            container.className = container.className.replace(/horse|ball|willie/g, '') + animation;
        }
    });

    Object.defineProperty(this, 'background', {
        get: function(){ return background },
        set: function(value){
            background = value;

            value = value.toString(16);
            if (value.length < 2) value = '0' + value;

            DOM.style(document.body, 'backgroundColor', '#' + value + value + value);
        }
    });
};

window.onload = function(){
    // Setup the DAT.GUI interface.
    DAT.GUI.autoPlace = false;

    var zt = new Zoetrope(),
        gui = new DAT.GUI();

    document.getElementById('options').appendChild(gui.domElement);

    gui.add(zt, 'animation').options({
        'Muybridge Horse': 'horse',
        'Bouncing Ball': 'ball',
        'Steamboat Willie': 'willie'
    }).name('Animation');
    gui.add(zt, 'period', 0.01, 5, 0.01).name('Rotational Period');
    gui.add(zt, 'scale', 0.5, 5, 0.01).name('Scale');
    gui.add(zt, 'angle', -20, 20, 0.1).name('Angle');
    gui.add(zt, 'background', 0, 255, 1).name('Background');

    // Setup the little show hide control button.
    var controls = document.getElementById('controls'),
        button = document.getElementById('controls-toggle');

    button.addEventListener('click', function(event){
        event.preventDefault();

        var closed = controls.className.match(/closed/),
            className = closed ? '' : 'closed',
            text = closed ? 'Hide Controls' : 'Show Controls';

        controls.className = className;
        button.innerHTML = text;
    }, false);
};