export default function handler(req,res){
  if(req.method === 'POST'){
    const {name, price} = req.body;

    if(!name | !price){
      res.status(400).json({ message: 'Invalid input' });
      return;
    }

    res.status(200).json({message:`Product ${name} with price ${price} has been added!`});
  }else{
    res.status(405).json({ message: 'Method not allowed' })
  }
}