export  function formateDate(date: Date): string{
    return date.toLocaleDateString();
}
export  function formatePriority(priority: string): string{
    return priority === '1'? 'High' : priority === '2'? 'Medium' : 'Low';
}

export function formateText(text: string): string{
    return text.length > 40? `${text.slice(0, 40)}...` : text;
}