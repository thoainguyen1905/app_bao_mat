export const renderPrice=(price:number)=>{
    return price?.toLocaleString('vi', {style : 'currency', currency : 'VND'});
}
