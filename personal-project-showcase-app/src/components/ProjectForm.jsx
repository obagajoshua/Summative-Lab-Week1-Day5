import { useState } from "react";

function ProjectForm({ onAddProject }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        onAddProject({ title, description });
        setTitle("");
        setDescription("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label className="title">Title:</label>
                <input className="title-input"
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label className="description">Description:</label>
                <input className="description-input"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button className="addproject" type="submit">
                Add Project
            </button>
        </form>
    );
}

export default ProjectForm;