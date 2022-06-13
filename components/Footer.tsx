import Link from 'next/link'
import tw from 'twin.macro'


const Container = tw.div`flex flex-col mx-auto pt-10 pb-16`
const LogoContainer = tw.div`flex justify-center gap-4`
const socialMedias = [
    // { name: 'twitter', href: "#", icon: <FaTwitter tw="h-4 w-4 lg:(h-6 w-6)" /> },
    // { name: 'youtube', href: "#", icon: <AiOutlineYoutube tw="h-4 w-4 lg:(h-6 w-6)" /> },
    // { name: 'discord', href: "#", icon: <FaDiscord tw="h-4 w-4 lg:(h-6 w-6)" /> },
    // { name: 'instagram', href: "#", icon: <GrInstagram tw="h-4 w-4 lg:(h-6 w-6)" /> },
    // { name: 'twitter', href: "https://twitter.com/ZOOONFTs", icon: <FaTwitter tw="h-4 w-4 lg:(h-6 w-6)" /> },
    // { name: 'discord', href: "https://discord.gg/zoooclub", icon: <FaDiscord tw="h-4 w-4 lg:(h-6 w-6)" /> },
]

function Footer() {
    return (
        <Container>
            <div tw="flex flex-col w-screen gap-6 tracking-widest">
                {/* <div tw="flex px-6 w-full justify-between">
                    <Link href="/" key="ZOOOCLUB.COM" passHref>
                        <a rel="noreferrer" tw="opacity-80 hover:(opacity-100 font-semibold)">
                            <div>&#10229; 10000years.xyz</div>
                        </a>
                    </Link>

                    <div>© 2022 10000 Years</div>
                </div> */}
                <div tw="text-2xl font-bold text-center">
                    10000 Years
                </div>
                {/* <div tw="text-sm text-center">
                    Record your t
                </div> */}
                {/* <div tw="w-full flex justify-center gap-4">
                    {
                        socialMedias.map((item, idx) => (
                            <Link href={item.href} key={item.imageUrl} passHref>
                                <a target="_blank" rel="noreferrer" tw="opacity-80 hover:(opacity-100 font-semibold)">
                                    {item.icon}
                                </a>
                            </Link>
                        ))
                    }
                </div> */}
            </div>

        </Container>
    )
}

export default Footer