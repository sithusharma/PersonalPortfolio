import React from 'react';

function Podcast() {
    const iframeStyle = {
        fontSize: '10px',
        color: '#cccccc',
        lineBreak: 'anywhere',
        wordBreak: 'normal',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
        fontWeight: '100'
    };

    const linkStyle = {
        color: '#cccccc',
        textDecoration: 'none'
    };

    return (
        <div>
            <div>
                <iframe
                    width="100%"
                    height="300"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1792123810&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                ></iframe>
                <div style={iframeStyle}>
                    <a href="https://soundcloud.com/team-otters" title="Team Otters" target="_blank" style={linkStyle}>Team Otters</a> · <a href="https://soundcloud.com/team-otters/sharenting" title="Sharenting" target="_blank" style={linkStyle}>Sharenting</a>
                </div>
            </div>
            <span>This weeks episode our group discussed the dangers of Sharenting and how to prevent child explotation from their parents.</span>
        </div>
    );
}

export default Podcast;
