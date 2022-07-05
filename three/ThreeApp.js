import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default class Sketch {
  constructor(selector) {
    // console.log("here !!!!!!!!!!!");
    this.scene = new THREE.Scene();
    this.scene.background = null;
    this.container = selector;
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    this.renderer.outputEncoding = THREE.sRGBEncoding;

    this.container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );

    const pointLight = new THREE.PointLight(0xffffff, 1.2);
    pointLight.position.x = -20;
    pointLight.position.y = 20;
    pointLight.position.z = 20;
    this.scene.add(pointLight);

    this.camera.position.set(-2, 8, 5);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    // my code
    const geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);
    // Materials
    const material = new THREE.MeshBasicMaterial();
    material.color = new THREE.Color(0xff0000);
    this.sphere = new THREE.Mesh(geometry, material);

    this.addDog();
    this.resize();
    this.render();
    this.setupResize();
  }

  settings() {
    let that = this;
    this.settings = {
      progress: 0,
    };
    this.gui = new dat.GUI();
    this.gui.add(this.settings, "progress", 0, 1, 0.01);
  }

  setupResize() {
    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
  }

  addDog() {
    //dog code
    const loader = new GLTFLoader();
    const loader_scene = this.scene;

    loader.load(
      "/dog2.glb",
      function (gltf) {
        // model = gltf.scene;
        gltf.scene.name = "dog";
        loader_scene.add(gltf.scene);
      },
      undefined,
      function (error) {
        console.error("woof! woof!", error);
      }
    );
  }

  rotateDog() {
    console.log("starting k9 rotation...");
    this.play();
  }

  render() {
    let dog = this.scene.getObjectByName("dog");
    if (dog) {
      dog.rotation.y += 0.001;
    }

    const clock = new THREE.Clock();
    const elapsedTime = clock.getElapsedTime();
    requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera);
  }
}
