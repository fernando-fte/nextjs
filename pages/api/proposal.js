async function proposal (rea, res) {

    const proposalResponse = await fetch("https://app.solarmaxx.tec.br/api-proposal/44258");
    const proposalResponseJson = await proposalResponse.json();
    const proposal_prince = proposalResponseJson.data.cost_value

    res.json({
        proposal: proposal_prince
    });
}

export default proposal;
