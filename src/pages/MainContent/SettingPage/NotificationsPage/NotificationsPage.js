import React, { useState } from 'react'
import "./_notificationsPage.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { faCircleDot, faCircle } from '@fortawesome/free-regular-svg-icons'
const RadioThree = ({ title, option, setOption, type }) => {
  return (<>

    <p className='sub-title'>
      {title}
    </p>
    <div className='radio-option' onClick={() => { setOption(1) }}>
      <FontAwesomeIcon size="xl" icon={option === 1 ? faCircleDot : faCircle} />
      Off
    </div>
    <div className='radio-option' onClick={() => { setOption(2) }}>
      <FontAwesomeIcon size="xl" icon={option === 2 ? faCircleDot : faCircle} />
      From profiles I follow
    </div>
    <div className='radio-option' onClick={() => { setOption(3) }}>
      <FontAwesomeIcon size="xl" icon={option === 3 ? faCircleDot : faCircle} />
      From everyone
    </div>
    <div className='hr'></div>
  </>
  )
}
const RadioTwo = ({ title, option, setOption }) => {
  return (<>
    <p className='sub-title'>
      {title}
    </p>
    <div className='radio-option' onClick={() => { setOption(1) }}>
      <FontAwesomeIcon size="xl" icon={option === 1 ? faCircleDot : faCircle} />
      Off
    </div>
    <div className='radio-option' onClick={() => { setOption(2) }}>
      <FontAwesomeIcon size="xl" icon={option === 2 ? faCircleDot : faCircle} />
      On
    </div>
    <div className='hr'></div>
  </>
  )
}
export const NotificationsPage = () => {
  //push
  const [selectNotifiction, setSelectNotification] = useState(null);
  const [toggle, setToggle] = useState(false)
  const [likesOption, setLikesOption] = useState(1)
  const [likesCommentsOption, setLikesCommentsOption] = useState(1)
  const [comments, setComments] = useState(1)
  const [commentLikes, setCommentLikes] = useState(1)
  const [postStories, setPostStories] = useState(1)
  const [notes, setNotes] = useState(1)
  const [newFollowers, setNewFollowers] = useState(1)
  const [acceptFollowRequest, setAcceptFollowRequest] = useState(1)
  const [acceptSuggestion, setAcceptSuggestion] = useState(1)
  const [mentionInBio, setMentionInBio] = useState(1)
  const [msgRequest, setMsgRequest] = useState(1)
  const [msgFromGrps, setMsgFromGrps] = useState(1)
  const [msgReminders, setMsgReminders] = useState(1)
  const [grpRequest, setGrpRequest] = useState(1)
  const [broadcastInvitation, setBroadcastInvitation] = useState(1)
  const [broadcastMsg, setBroadcastMsg] = useState(1)
  const [broadcastReplies, setBroadcastReplies] = useState(1)
  const [broadcastReplyLike, setBroadcastReplyLike] = useState(1)
  const [socialChannelMsg, setSocialChannelMsg] = useState(1)
  const [originalAudio, setOriginalAudio] = useState(1)
  const [remix, setRemix] = useState(1)
  const [liveVid, setLiveVid] = useState(1)
  const [recentlyUploadReels, setRecentlyUploadReels] = useState(1)
  const [reelsSuggestion, setReelsSuggestion] = useState(1)
  const [addYours, setAddYours] = useState(1)
  const [reelsMadeForYou, setReelsMadeForYou] = useState(1)
  const [yourFundraisers, setYourFundraisers] = useState(1)
  const [otherFundraisers, setOtherFundraisers] = useState(1)
  const [reminders, setReminders] = useState(1)
  const [productAnnouncement, setProductAnnouncement] = useState(1)
  const [supportRequests, setSupportRequests] = useState(1)
  const [trendingPlaces, setTrendingPlaces] = useState(1)
  const [birthdays, setBirthdays] = useState(1)


  //email
  const [feedbackEmail, setFeedbackEmail] = useState(1)
  const [reminderEmails, setReminderEmails] = useState(1)
  const [productEmails, setProductEmails] = useState(1)
  const [newsEmails, setNewsEmails] = useState(1)
  const [supportEmails, setSupportEmails] = useState(1)
  return (
    <div className='notification'>
      {
        selectNotifiction === null &&
        <>
          <p className='title'>Notification</p>
          <div className='select-notificaton'>
            <div className='options' onClick={() => { setSelectNotification("Push") }}>
              <p>Push notificatons</p>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
            <div className='options' onClick={() => { setSelectNotification("Email") }}>
              <p>Email notificatons</p>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
        </>
      }
      {
        selectNotifiction === "Push" &&
        <>
          <p className='title'>Push notifications</p>
          <p className='sub-title'>
            Push notifications
          </p>

          <div className='txt-toggle'>
            <p>Pause all</p>
            <FontAwesomeIcon icon={toggle ? faToggleOn : faToggleOff} size='2x' onClick={() => { setToggle(!toggle) }} />
          </div>

          <RadioThree title="Likes" option={likesOption} setOption={setLikesOption} />
          <RadioThree title="Likes and comments on photos of you" option={likesCommentsOption} setOption={setLikesCommentsOption} />
          <RadioThree title="Comments" option={comments} setOption={setComments} />
          <RadioTwo title="Comment likes" option={commentLikes} setOption={setCommentLikes} />
          <RadioThree title="First posts and stories" option={postStories} setOption={setPostStories} />
          <RadioTwo title="Notes" option={notes} setOption={setNotes} />
          <RadioTwo title="New followers" option={newFollowers} setOption={setNewFollowers} />
          <RadioTwo title="Accepted follow requests" option={acceptFollowRequest} setOption={setAcceptFollowRequest} />
          <RadioTwo title="Account suggestions" option={acceptSuggestion} setOption={setAcceptSuggestion} />
          <RadioThree title="Mentions in bio" option={mentionInBio} setOption={setMentionInBio} />
          <RadioTwo title="Message requests" option={msgRequest} setOption={setMsgRequest} />
          <RadioTwo title="Messages from individual and group chats" option={msgFromGrps} setOption={setMsgFromGrps} />
          <RadioTwo title="Message reminders" option={msgReminders} setOption={setMsgReminders} />
          <RadioTwo title="Group requests" option={grpRequest} setOption={setGrpRequest} />
          <RadioTwo title="Broadcast channel invitations" option={broadcastInvitation} setOption={setBroadcastInvitation} />
          <RadioTwo title="Broadcast channel messages" option={broadcastMsg} setOption={setBroadcastMsg} />
          <RadioThree title="Broadcast channel replies" option={broadcastReplies} setOption={setBroadcastReplies} />
          <RadioTwo title="Broadcast channel reply likes" option={broadcastReplyLike} setOption={setBroadcastReplyLike} />
          <RadioTwo title="Social channel messages" option={socialChannelMsg} setOption={setSocialChannelMsg} />
          <RadioTwo title="Original audio" option={originalAudio} setOption={setOriginalAudio} />
          <RadioTwo title="Remixes" option={remix} setOption={setRemix} />
          <RadioTwo title="Live videos" option={liveVid} setOption={setLiveVid} />
          <RadioTwo title="Recently uploaded reels" option={recentlyUploadReels} setOption={setRecentlyUploadReels} />
          <RadioTwo title="Reels suggested for you" option={reelsSuggestion} setOption={setReelsSuggestion} />
          <RadioTwo title="Add yours" option={addYours} setOption={setAddYours} />
          <RadioTwo title="Reels made for you" option={reelsMadeForYou} setOption={setReelsMadeForYou} />
          <RadioTwo title="Your fundraisers" option={yourFundraisers} setOption={setYourFundraisers} />
          <RadioTwo title="Fundraisers by others" option={otherFundraisers} setOption={setOtherFundraisers} />
          <RadioTwo title="Reminders" option={reminders} setOption={setReminders} />
          <RadioTwo title="Product announcements and feedback" option={productAnnouncement} setOption={setProductAnnouncement} />
          <RadioTwo title="Support requests" option={supportRequests} setOption={setSupportRequests} />
          <RadioTwo title="Trending places" option={trendingPlaces} setOption={setTrendingPlaces} />
          <RadioTwo title="Birthdays" option={birthdays} setOption={setBirthdays} />

        </>
      }
      {
        selectNotifiction === "Email" &&
        <>
          <p className='title'>Email notifications</p>
          <RadioTwo title="Feedback emails" option={feedbackEmail} setOption={setFeedbackEmail} />
          <RadioTwo title="Reminder emails" option={reminderEmails} setOption={setReminderEmails} />
          <RadioTwo title="Product emails" option={productEmails} setOption={setProductEmails} />
          <RadioTwo title="News emails" option={newsEmails} setOption={setNewsEmails} />
          <RadioTwo title="Support emails" option={supportEmails} setOption={setSupportEmails} />
        </>
      }
    </div>
  )
}
