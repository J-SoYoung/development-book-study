let numbers = [3,1,4,1,5,9]

function recursive ( acc, array) {
  if (array.length === 0) {
    console.log(`총합 ${acc}`)
    return acc;
  }else {
    try{
      console.log(`recursive(${acc} [${array}])가`)
      return recursive( acc + array[0], array.slice(1) )
    }catch(e){} finally {
      console.log('라고 말했어요')
    }
    // slice자르기 [1]부터 배열 반환
    return recursive(acc + array[0], array.slice(1))
  }
}

recursive(0, numbers)