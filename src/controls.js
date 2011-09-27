
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
        animation = 'willie';

    Object.defineProperty(this, 'Scale', {
        get: function(){ return scale },
        set: function(value){
            scale = value;
            DOM.style(wrapper, 'transform', 'scale(' + scale + ')');
        }
    });

    Object.defineProperty(this, 'Rotation Period', {
        get: function(){ return period },
        set: function(value){
            period = value;
            DOM.style(frames, 'animationDuration', (period * 1000) + 'ms');
        }
    });

    Object.defineProperty(this, 'Angle', {
        get: function(){ return angle },
        set: function(value){
            angle = value;
            DOM.style(container, 'transform', 'rotateX(' + angle + 'deg)');
        }
    });

    Object.defineProperty(this, 'Animation', {
        get: function(){ return animation },
        set: function(value){
            animation = value;
            container.className = container.className.replace(/horse|ball|willie/g, '') + animation;
        }
    });
};

window.onload = function(){
    // Setup the DAT.GUI interface.
    DAT.GUI.autoPlace = false;

    var zt = new Zoetrope(),
        gui = new DAT.GUI();

    document.getElementById('options').appendChild(gui.domElement);

    gui.add(zt, 'Animation').options({
        'Muybridge Horse': 'horse',
        'Bouncing Ball': 'ball',
        'Steamboat Willie': 'willie'
    });
    gui.add(zt, 'Rotation Period', 0.01, 5, 0.01);
    gui.add(zt, 'Scale', 0.5, 5, 0.01);
    gui.add(zt, 'Angle', -20, 20, 0.1);

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