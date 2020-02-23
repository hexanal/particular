import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import './App.scss';

function Sphere(props) {
	const mesh = useRef();
	const [active, setActive] = useState(false)

	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
			onClick={e => setActive(!active)}
		>
			<sphereGeometry attach="geometry" args={[1, 16, 16]} />
			<meshStandardMaterial attach="material" color="orange" />
		</mesh>
	);
}

function App() {
	return (
		<div className="App">
			<header className="App__header">
				<div className="App__renderer">
					<Canvas>
						<ambientLight />
						<pointLight position={[10, 10, 10]} />
						<Sphere position={[-1.2, 0, 0]} />
						<Sphere position={[1.2, 0, 0]} />
					</Canvas>
				</div>

				<h1 className="App__heading">
					Balls
				</h1>
			</header>
		</div>
	);
}

export default App;
