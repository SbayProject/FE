function removeDiacritics(inputString) {
    return inputString
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, '_')
      .toLowerCase();
  }


  export default removeDiacritics;