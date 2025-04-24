export default function handler(req,res){
  const list = [
    { "id": 1, "name": "Product A", "price": 100 },
    { "id": 2, "name": "Product B", "price": 200 }
  ];
  if(req.method === 'GET'){
    res.status(200).json({list});
    
  }else{
    res.status(405).json({message:'Method not allowed'})
  }
}

