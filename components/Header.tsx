import Link from 'next/link';
import { FaDiscord, FaTwitter } from "react-icons/fa";
import tw from "twin.macro";
import ConnectWalletButton from './ConnectWalletButton';
// import ConnectWalletButton from './ConnectWalletButton';

const navigation = [
    { name: 'Speak', href: '/#speak', current: false },
    { name: 'xxxx', href: '/#', current: false },
    { name: 'xxxxx', href: '/#', current: false },
    // { name: 'xxxxxx', href: '/#member', current: false },
    // { name: 'MINT', href: '/mint', current: false },
]

const socialMedias = [
    { name: 'twitter', href: "#", icon: <FaTwitter tw="h-4 w-4 lg:(h-6 w-6)" /> },
    // { name: 'youtube', href: "#", icon: <AiOutlineYoutube tw="h-4 w-4 lg:(h-6 w-6)" /> },
    { name: 'discord', href: "#", icon: <FaDiscord tw="h-4 w-4 lg:(h-6 w-6)" /> },
    // { name: 'instagram', href: "#", icon: <GrInstagram tw="h-4 w-4 lg:(h-6 w-6)" /> },
]

const Container = tw.div`px-4 py-2 flex text-white justify-between items-center lg:(px-8 py-4)`
const LogoContainer = tw.div`hover:cursor-pointer lg:(w-1/4)`
const NavContainer = tw.div`hidden lg:(flex gap-8 w-1/2 justify-center)`
const Button = tw.button`inline-flex items-center border px-4 border-transparent text-lg rounded-3xl shadow-sm ring-1 ring-black text-black bg-white hover:(bg-black text-white)`

const RightContainer = tw.div`flex gap-2 justify-center lg:(gap-4 w-1/4) items-center `

export default function Header() {
    return (
        <Container>

            <LogoContainer>
                <Link href="/">
                    <a tw="flex gap-4 justify-center items-center">
                        <div tw="text-base font-semibold lg:(block text-xl font-bold)">10000 YEARS</div>
                    </a>
                </Link>
            </LogoContainer>




            <NavContainer>
                {navigation.map((item, idx) => (
                    <div key={idx} tw="opacity-80 hover:(opacity-100 font-semibold)">
                        <Link href={item.href} data-text={item.name} passHref>
                            <a>
                                {item.name}
                            </a>
                        </Link>
                    </div>
                ))}
            </NavContainer>


            <RightContainer>
                {
                    socialMedias.map((item, idx) => (
                        <Link href={item.href} key={item.name} passHref>
                            <a target="_blank" rel="noreferrer" tw="opacity-80 hover:(opacity-100 font-semibold)">
                                {item.icon}
                            </a>
                        </Link>
                    ))
                }
                <ConnectWalletButton />
            </RightContainer>
        </Container>
    )
}
