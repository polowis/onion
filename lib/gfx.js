/**
 * load an image
 * @param {*} url 
 * @param {*} callback 
 */

function loadImage(url, callback){
    let image = new Image();
    image.addEventListener("load", callback.bind(undefined, image));
    image.addEventListener("error", (e) => {
        console.log("Error loading image", image, e);
    });
    image.src = url;
}

/**
 * load audio file
 * @param {*} url 
 * @param {*} callback 
 */
function loadRadio(url, callback) {
    let audio = new Audio();
    let loaded = false;
    audio.addEventListener("canplaythrough", () => {
        if(!loaded) {
            loaded = true;
            callback(radio);
        }
    });
    audio.addEventListener('error',  (e) => {
		console.log("error loading audio:", audio, e);
	});
	audio.preload = "auto";
	audio.src = url;
	audio.load();
}

/**
 * 
 * @param {*} assets 
 * @param {*} callback 
 */

function loadAssets(assets) {
    let images = assets.images;
    let audio = assets.audio;
    let loadedAssets = {
        images: {},
        audio: {},
    }

    let countLoaded = 0;
    let countExpected = 0;
    if(images) {
        countExpected += Object.keys(images).length;
    }

    if(audio){
        countExpected += Object.keys(audio).length;
    }

    if (images) {
		let keys = Object.keys(images);
		for (var i = 0; i < keys.length; i++) {
			loadImage(images[keys[i]], ((key, image) => {
				console.log("loaded image:", image);
                loadedAssets.images[key] = image;
				countLoaded++;
			}).bind(undefined, keys[i]));
		}
    }
    
    if (audio) {
		let keys = Object.keys(audio);
		for (var i = 0; i < keys.length; i++) {
			loadAudio(audio[keys[i]], ((key, ad) => {
				console.log("loaded audio:", ad);
                loadedAssets.audio[key] = ad;
				countLoaded++;
			}).bind(undefined, keys[i]));
		}
	}
}

