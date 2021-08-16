function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32
        py-14 bg-gray-100 text-gray-600">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">TITLE</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnbplus</p>
                <p>Airbnb Luxe</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">GALLERY</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>It's a pretty awesome clone</p>
                <p>Referrals accepted</p>
                <p>-Mikey C.</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">LOCATION</h5>
                <p>Mesa</p>
                <p>October 2022</p>
                <p>Wedding Day</p>
                <p>Book a room</p>
                <p>See locations</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">CONTACT</h5>
                <p>Currently</p>
                <p>Living in</p>
                <p>Queen Creek</p>
                <p>Arizona</p>
                <p>Looking for a job!</p>
            </div>
        </div>        
    );
}

export default Footer
