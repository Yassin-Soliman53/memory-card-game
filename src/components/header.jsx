const Gameheader = ({score, moves, onReset}) => {
    return (
        <div className="Header-div">
            <h1>🎮Memory card game </h1>
            <div className="stats">
                <div className="stat-item">
                    <span className="stat-label">SCORE :</span>{" "}
                    <span className="stat-value">{score}</span>  
                </div>
                <div className="stat-item">
                    <span className="stat-label">MOVES : </span>{" "}
                    <span className="stat-value">{moves}</span>
                </div>
            </div>
            <button className="reset-btn" onClick={onReset}>
                Reset Game
            </button>
        </div>
    )
}

export default Gameheader; 