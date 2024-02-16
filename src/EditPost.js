
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:3001/editpost/${id}`, { title, description });
            alert('Edit successful');
            navigate(`/post/${id}`);
        } catch (error) {
            console.error('Error editing post:', error);
        }
    };

    useEffect(() => {
        axios.get(`http://localhost:3001/getPostbyid/${id}`)
            .then(response => {
                setTitle(response.data.title);
                setDescription(response.data.description);
            })
            .catch(error => {
                console.error('Error fetching post:', error);
            });
    }, [id]);

    return (
        <div className="create-post-container">
            <h2>Edit Post</h2>
            <form onSubmit={handleSubmit} className="create-post-form">
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit" className="submit-button">Update</button>
            </form>
        </div>
    );
}

export default EditPost;
