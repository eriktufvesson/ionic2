import {Injectable, Pipe} from 'angular2/core';

@Pipe({
  name: '<%= fileName %>'
})
@Injectable()
class <%= jsClassName %> {
  transform(v, args) { 
    return v.toLowerCase(); 
  }
}
