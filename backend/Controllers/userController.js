import { get } from "mongoose";
import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";


export const updateUser = async(req,res)=>{
    console.log(req.body);
    const id = req.params.id

    try{
        const updatedUser = await User.findByIdAndUpdate(id, {$set:req.body}, {new:true});

        res.status(200).json({success:true, message:'Successfully updated!!', data:updatedUser});

    }
    catch(error){
        res.status(500).json({success:false, message:'Update Failed'});
    }


}
export const deleteUser = async(req,res)=>{
    const id = req.params.id

    try{
        await User.findByIdAndDelete(id,);

        res.status(200).json({success:true, message:'Successfully deleted!!'});

    }
    catch(error){
        res.status(500).json({success:false, message:'Operation Failed'});
    }


}
export const getSingleUser = async(req,res)=>{
    const id = req.params.id

    try{
        const user = await User.findById(id,).select('-password');

        res.status(200).json({success:true, message:'User Found!!', data: user });

    }
    catch(error){
        res.status(404).json({success:false, message:'No User Found'});
    }
}
    export const getAllUser = async (req,res) => {
       
    
        try{
            const users = await User.find({}).select('-password');
    
            res.status(200).json({success:true, message:'Users Found!!', data: users });
    
        }
        catch(error){
            res.status(404).json({success:false, message:'No Users Found'});
        }


 }

 export const getUserProfile = async(req,res) =>{
    const userId = req.userId

    try{
        const user = await User.findById(userId,)

        if(!user){
            return res.status(404).json({success:false, message:'User not found'});
        }

        const {password, ...rest} = user._doc 

        res.status(200).json({success:true, message:'User Found!!', data:{...rest}})

    }catch(error){
        res.status(500).json({success:false, message:'Something Went wrong'});

    }
 }

 export const getMyAppoinments = async(req,res) => {
        console.log(req.userId);
    try {

        // Get the current user appoinments

        const bookings = await Booking.find({user:req.userId})
        console.log(bookings);        // get doctor id from appoinments

        const doctorIds = bookings.map(el => el.doctor.id)

        // retrive doctors using the current appoinments

        const doctors = await Doctor.find({_id: {$in: doctorIds}}).select('-password')
        
        res.status(200).json({success:true, message:'Appoinments Found!!', data:doctors})

    }
    catch(error){
        res.status(500).json({success:false, message:'Something Went wrong'});
    }

 }