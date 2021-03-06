import { Record } from 'immutable';
import { formatTrackTitle, streamUrl, trackImageUrl, waveformUrl } from './utils';


export const Track = new Record({
  artworkUrl: null,
  duration: null,
  id: null,
  liked: null,
  likesCount: null,
  permalinkUrl: null,
  playbackCount: null,
  streamable: null,
  streamUrl: null,
  title: null,
  userId: null,
  username: null,
  userPermalinkUrl: null,
  waveformUrl: null
});


export function createTrack(data) {
  return new Track({

    id: data.id,
    username: data.username,
    // title: formatTrackTitle(data.title),


  });
}
