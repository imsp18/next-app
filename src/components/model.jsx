import '@google/model-viewer';

const Model = () => (
    <div id="card">
        <model-viewer
            src="https://bafybeibm4shvjsxh3mk3ohvstmil3fjyhmhv4oxpb4q6l47qgd2hdxhf3i.ipfs.w3s.link/ipfs/bafybeibm4shvjsxh3mk3ohvstmil3fjyhmhv4oxpb4q6l47qgd2hdxhf3i/bugatti.glb"
            alt="A 3D model"
            shadow-intensity="1"
            camera-controls
            auto-rotate
            ar
        ></model-viewer>
    </div>
)

export default Model;
