import type { Entity } from "$lib/types";

export function isValidName(word: string){
    return /^\p{Lu}/u.test(word);
}

export function removeUnknownHtmlTags(input: string){
    input = input.replace(/<\$TABLE_SKILLFEATURE[^>]*\/>/g, "??");
    input = input.replace(/<\$CALC[^>]*\/>/g, "??");
    return input;
}
  
export function formatPlayerName(player: Entity,  showNames = true): string {
    let playerName = player.name;
    if (!isValidName(playerName) || !showNames) {
        playerName = "";
        if (player.gearScore > 0) {
            playerName += player.gearScore + " ";
        }
        if (player.class) {
            playerName += player.class;
        }
    }
    if (player.isDead) {
        playerName = "💀 " + playerName;
    }

    return playerName;
}

export function truncateString(str: string, len = 10): string {
    if (str.length > len) {
        return str.slice(0, len) + "...";
    }
    return str;
}

export function getSkillIcon(skillIcon: string): string {
    return encodeURIComponent("\\" + ((skillIcon !== '') ? skillIcon : 'unknown.png'));
}