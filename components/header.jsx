import {SignedOut,SignedIn,SignInButton,UserButton} from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import { LayoutDashboard ,PenBox} from "lucide-react";
const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={200} height={60} className="h-12 w-auto object-contain"/>
        </Link>
      <SignedIn>
         
      </SignedIn>
      <div className="flex items-center space-x-4">
        <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard">
            <Button variant="outline">Login</Button>
          </SignInButton>
        </SignedOut>
      
      <SignedIn>
               <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 flex items-center gap-2"> 
         <Button variant={"outline"}>
            <LayoutDashboard size={18} className="mr-2 h-4 w-4"/>

             <span className="hidden md:inline">
              Dashboard
             </span>
         </Button>
         </Link>
         <Link href="/transaction/create" > 
         <Button className="flex items-center gap-2">
            <LayoutDashboard size={18} className="mr-2 h-4 w-4"/>
             <PenBox size={18}/>
             <span className="hidden md:inline">
              Add Transcaction
             </span>
         </Button>
         </Link>
              <UserButton appearance={
                {
                  elements: {
                    avatarBox: "h-10 w-10",
                  }
                }
              }/>
      </SignedIn>
      </div>
       </nav>
    </div>
  )
}

export default Header