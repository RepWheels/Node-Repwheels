function deleteOne(id){
    
    fetch(`/deleteProduct/${id}`, {
      method: 'DELETE',
    })
    .then(
      alert('Eliminado correctamente')
    )
    location.href = '/productos'
    
}