import fs from 'vite-plugin-fs/browser';

export async function saveVote(username: string, date: string) {
    try {
        let data;
        try {
            const file = await fs.readFile('votes.json');
            data = file.toString();
        } catch (err) {
            data = '[]';
        }
        let votesArray: Array<{ username: string; votes: number; lastVoteDate: string }> = JSON.parse(data)
        let found = votesArray.find(vote => vote.username === username);

        if (found) {
            found.votes++;
            found.lastVoteDate = date;
        } else {
            votesArray.push({ username: username, votes: 1, lastVoteDate: date });
        }
        
        await fs.writeFile('votes.json', JSON.stringify(votesArray));

    } catch (err) {
        throw err;
    }
}

export async function getLeaderboard(max: number = 3)
{
    try {
        const file = await fs.readFile('votes.json');
        let votesArray: Array<{ username: string; votes: number; lastVoteDate: string }> = JSON.parse(file.toString());
        votesArray.sort((a, b) => b.votes - a.votes);
        return votesArray.slice(0, max);
    } catch (err) {
        throw err;
    }
}