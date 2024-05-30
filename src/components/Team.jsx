const Team = (props) => {
    const { zombieFighter, handleAddFighter, team, setTeam, money, setMoney } = props

    // const [money, setMoney] = useState(100);
    // const [team, setTeam] = useState([]);

    const [totalStrength, setTotalStrength] = useState(0);


    return (
        <>
            <li>
                <h3>{team.name}</h3>
            </li>
        </>
    )
}

export default Team;