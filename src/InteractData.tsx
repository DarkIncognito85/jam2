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
