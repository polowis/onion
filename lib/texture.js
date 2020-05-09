class Texture{
    /**
     * render a canvas with the given image texture by the texture
     * 
     * @param image
     * @param texture
     * @param offsetx
     * @param offsety
     * @param alpha
     */
    render(image, texture, offsetx, offsety, alpha){
        let bufferCanvas = document.createElement('canvas');
        bufferCanvas.width = image.width;
        bufferCanvas.height = image.height;
        let bufferContext = bufferCanvas.getContext('2d');
        bufferContext.imageSmoothingEnabled = false;

        if(offsetx === 0 && offsety === 0){
            bufferContext.drawImage(texture, 0, 0, image.width, image.height);
        } else{
            bufferContext.drawImage(texture, offsetx, offsety, image.width, image.height);
            bufferContext.drawImage(texture, offsetx - image.width, offsety, image.width, image.height);
            bufferContext.drawImage(texture, offsetx, offsety - image.height, image.width, image.height);
            bufferContext.drawImage(texture, offsetx - image.width, offsety - image.height, image.width, image.height);
        }

        bufferContext.globalCompositeOperation = "destination-in";
        bufferContext.drawImage(image, 0, 0);
        bufferContext.globalCompositeOperation = "source-over";
        bufferContext.globalAlpha = alpha;
        bufferContext.drawImage(image, 0, 0);
        return bufferCanvas;
    }

    colorize(image, fillStyle){
        let bufferCanvas = document.createElement('canvas');
        bufferCanvas.width = image.width;
        bufferCanvas.height = image.height;
        let bufferContext = bufferCanvas.getContext('2d');
        bufferContext.imageSmoothingEnabled = false;
    }
}