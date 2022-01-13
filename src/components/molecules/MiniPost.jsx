import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

const MiniPost = (props) => {
    const { post } = props;
    const [showCover, setShowCover] = useState(false);
    const [numComments, setNumComments] = useState(0);

    const handleMouseOver = () => {
        fetch(`http://localhost:8083/comments/${post.postId}`)
            .then((res) => res.json())
            .then((data) => {
                setNumComments(data.fullComments.length);
                setShowCover(true);
            });
    };

    return (
        <div
            style={{ position: 'relative' }}
            onMouseOver={() => handleMouseOver()}
            onMouseLeave={() => setShowCover(false)}
        >
            <div>
                <img src={'/images/img_girl.jpeg'} alt='girl in jacket' width='100%' />
            </div>

            {showCover ? (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        zIndex: 100,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgb(180, 180, 180, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        cursor: 'pointer',
                    }}
                >
                    <div style={{ display: 'flex', alignItem: 'center', color: 'white' }}>
                        <FavoriteIcon style={{ paddingRight: '5px' }} />
                        <b>{post.likeCount}</b>
                    </div>
                    <div style={{ display: 'flex', alignItem: 'center', color: 'white' }}>
                        <ModeCommentIcon style={{ paddingRight: '5px' }} />
                        <b>{numComments}</b>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default MiniPost;
