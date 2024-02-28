"use client";

import { useState } from "react";
import "./task.css";
import Title from "../components/Title";

export default function TaskManager() {
	const [isDragged, setIsDragged] = useState(false);
	const isDragging = "is-dragging";

	const handleDrag = () => {
		console.log("dragged");
		setIsDragged(true);
	};

	const handleDragOver = (e) => {
		e.preventDefault();
		alert("hello");
	};

	return (
		<div className="board">
			<Title>Task Manager</Title>
			<div className="todo-form">
				<input type="text" placeholder="New Todo" />
				<button type="submit">Add</button>
			</div>

			<div className="lanes">
				<div className="swim-lane">
					<h2>TODO</h2>

					<p
						className={`task ${
							isDragged
								? isDragging
								: ""
						}`}
						draggable="true"
						onDragStart={handleDrag}
						onDragEnd={() =>
							setIsDragged(false)
						}>
						Jemput
					</p>
					<p className="task" draggable="true">
						Beberes rumah
					</p>
					<p className="task" draggable="true">
						Belajar
					</p>
				</div>

				<div
					className="swim-lane"
					onDragOver={handleDragOver}>
					<h2>DOING</h2>

					<p className="task" draggable="true">
						Belajar
					</p>
				</div>

				<div className="swim-lane">
					<h2>DONE</h2>

					<p className="task" draggable="true">
						Beli sari kacang hijau
					</p>
				</div>
			</div>
		</div>
	);
}
