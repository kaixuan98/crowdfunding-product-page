declare interface Size{
    width: number ;
    height: number ;
}

declare interface Toggle{
    isActive: boolean;
    setToggle: Dispatch<SetStateAction<boolean>>;  
}