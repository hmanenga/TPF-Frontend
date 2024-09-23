export  function formateDate(date: Date): string{
    return date.toLocaleDateString();
}
export  function formatePriority(priority: string): string{
    return priority === '1'? 'High' : priority === '2'? 'Medium' : 'Low';
}

export function formateText(text: string, charactersQuantity=40): string{
    return text.length > charactersQuantity? `${text.slice(0, charactersQuantity)}...` : text;
}