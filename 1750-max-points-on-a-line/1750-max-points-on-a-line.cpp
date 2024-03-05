
class Solution {
public:
        int maxPoints(vector<Point> &points) {
                int k[20000];
                memset(k,0,sizeof(int)*20000);
                int max = 0;
                int count  = 0;
                int tmp_max = 0;
                for(int i = 0; i < points.size(); i++){
                        count = 0;
                        tmp_max = 0;
                        memset(k,0,sizeof(int)*20000);
                        for(int j = 0; j < points.size(); j++){
                                if(j != i){
                                        if(equal(points[i],points[j])){
                                                count ++;
                                        }else{
                                                //cout << cal_k(points[i],points[j]) << "*" << endl;
                                                k[cal_k(points[i],points[j])]++;
                                        }
                                }
                        }
                        for(int x = 0; x < 20000; x++){
                                if(k[x] > tmp_max){
                                        tmp_max = k[x];
                                }
                        }
                        count = count + tmp_max;
                        if(count > max){
                                //cout << count << "-" << endl;
                                max = count;
                        }
                }
                if(points.size() == 0){
                        return 0;
                }
                return max+1;
        }

        int cal_k(Point a,Point b){
                if(a.x == b.x && a.y!=b.y){
                        return 19999;
                }
                else{
                        return (int((double(b.y - a.y)/double(b.x - a.x))*131.7321))%10000 + 10000;
                }
        }

        int equal(Point a,Point b){
                 if(a.x == b.x && a.y == b.y){
                        return 1;
                 }else return 0;
        }


};