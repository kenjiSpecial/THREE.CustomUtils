'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.memcpy = memcpy;
exports.createRenderTarget = createRenderTarget;
var THREE = require('three');

// source from https://gist.github.com/jussi-kalliokoski/3138956
function memcpy(src, srcOffset, dst, dstOffset, length) {
    var i = void 0;

    src = src.subarray || src.slice ? src : src.buffer;
    dst = dst.subarray || dst.slice ? dst : dst.buffer;

    src = srcOffset ? src.subarray ? src.subarray(srcOffset, length && srcOffset + length) : src.slice(srcOffset, length && srcOffset + length) : src;

    if (dst.set) {
        dst.set(src, dstOffset);
    } else {
        for (i = 0; i < src.length; i++) {
            dst[i + dstOffset] = src[i];
        }
    }

    return dst;
}

// source from https://github.com/spite/codevember-2016
function createRenderTarget() {

    var type = THREE.FloatType;
    if (renderer.extensions.get('OES_texture_float_linear') === null) type = THREE.HalfFloatType;

    var rt = new THREE.WebGLRenderTarget(1, 1, {
        wrapS: THREE.ClampToEdgeWrapping,
        wrapT: THREE.ClampToEdgeWrapping,
        format: THREE.RGBAFormat,
        type: type,
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        stencilBuffer: false,
        depthBuffer: true
    });
    rt.texture.generateMipmaps = false;

    return rt;
}