export default function shellSort(arr) {
    const animations = [];
    let n = arr.length;
	for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))	{
		for (let i = gap; i < n; i ++)  {
			let temp = arr[i];
            let j;
            animations.push(["pivot",i]);
			for (j = i; j >= gap && arr[j-gap] > temp; j-=gap)  {
                arr[j] = arr[j-gap];
                animations.push(["change",j,j-gap]);
            }
            arr[j] = temp;
            animations.push(["change",j,i]);
		}
	}
	return animations;
}