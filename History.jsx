import  { useState } from 'react';
import '../styles/History.css'; // Ensure your CSS file is imported

const History = () => {
  return (
    <div className="history-container">
      <div className="left-section">
        <h1 className="title">
          HISTORY OF
          <br />
          TOURNAMENTS
        </h1>
        <div className="image-container">
          <img
            src="assets/poster.jpeg"
            alt="Cricket team"
            className="award-image"
          />
        </div>
      </div>
      <div className="right-section">
        <div className="awards-section">
          <div className="award-item">
            <img
              src="assets/his1.jpg"
              alt="Award icon for 2017"
              className="award-icon"
            />
            <div>
              <h2 className="award-year">2017</h2>
              <p className="award-description">
                XYZ Organization launched its inaugural T20 tournament with 8 local teams. Team Strikers won in a nail-biting super-over final. John Doe was the star player, contributing with both bat and ball. The event set the foundation for future cricketing success.
              </p>
            </div>
          </div>

          <div className="award-item">
            <img
              src="assets/his2.jpg"
              alt="Award icon for 2019"
              className="award-icon"
            />
            <div>
              <h2 className="award-year">2019</h2>
              <p className="award-description">
                The tournament grew, adding an ODI format with 16 teams participating. Team Thunder triumphed, led by Amit Singh’s brilliant captaincy. Record audience attendance marked this year as the stepping stone towards becoming a major cricket event.
              </p>
            </div>
          </div>

          <div className="award-item">
            <img
              src="assets/his3.jpg"
              alt="Award icon for 2023"
              className="award-icon"
            />
            <div>
              <h2 className="award-year">2023</h2>
              <p className="award-description">
                Teams from across the country joined the competition. Team Titans won the title, with all-rounder Sara Khan making history by becoming the first female centurion in the tournament. The matches were streamed online, gathering thousands of viewers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
