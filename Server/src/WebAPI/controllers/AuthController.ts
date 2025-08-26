import { Router, Request,Response } from "express";
import { IAuthService } from "../../Domain/services/auth/IAuthService";
import { AuthRequestValidators } from "../validators/auth/AuthRequestValidator";

 export class AuthConstroller{
    private router : Router;
    private authUser: IAuthService;

    constructor(authService: IAuthService){
        this.router = Router();
        this.authUser = authService;
        this.initializeRouters();
    }

    private initializeRouters(){
        this.router.post("/auth/login",this.login.bind(this));
        this.router.post("/auth/register",this.register.bind(this));
    }

    private async login(req:Request,res:Response):Promise<void>{
        try{
            const {username,password} =req.body;
            const validationOK = AuthRequestValidators(username,password);
            if(validationOK.succsess === false){
                res.status(400).json({success:false,message:validationOK.message});
            }
            
            const result = await this.authUser.login(username,password);
            if(result.id !== 0 ){
                res.status(200).json({succsess:true,message:"Login succsess!",data: result});
            }
            else {
                res.status(401).json({succsess:false, message:"Login Failed!"});
            }
        }
        catch{
            res.status(500).json({succsess:false,massage:"Server Error"});
        }
    } 

    private async register(req:Request,res:Response):Promise<void>{
        try{
            const {username,phone,role,password} =req.body;
            const validationOK = AuthRequestValidators(username,password);
            if(validationOK.succsess === false){
                res.status(400).json({success:false,message:validationOK.message});
            }
            
            const result = await this.authUser.register(username,phone,role,password);
            if(result.id !== 0 ){
                res.status(200).json({succsess:true,message:"Register succsess!",data: result});
            }
            else {
                res.status(401).json({succsess:false, message:"Register Failed!"});
            }
        }
        catch{
            res.status(500).json({succsess:false,massage:"Server Error"});
        }
    } 

    public getRouther(){return this.router;}
 }